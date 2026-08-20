import { connectDB } from "@/lib/connectDB";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import { createHmac, randomBytes } from "crypto"; // random bytes also use
import { signCookie } from "@/lib/auth";

export async function POST(request) {
  await connectDB();
  const cookiesStore = await cookies();
  const {email, password} = await request.json();
  try {
    const user = await User.findOne({ email });
    if(!user || user.password !== password){
      return Response.json(
        {error: "Invalid Credentials!"},
        {
          status: 400
        },
      );
    }

    // const signature = createHmac('sha256', process.env.COOKIE_SECRET)
    //   .update(user.id)
    //   .digest("hex");
    // // console.log({ signature });

    // const signedUserId = `${user.id}.${signature}`;
      

    cookiesStore.set("userId", signCookie(user.id), {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

    return Response.json(user, {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return Response.json(
        { error: "Email already exists" },
        {
          status: 409,
        }
      );
    } else {
      return Response.json(
        { error: "Something went wrong" },
        {
          status: 500,
        }
      );
    }
  }
}