// export const dynamic = "force-dynamic";
import styles from "./Home.module.css";

const Home = () => {
  // const randomNumber = Math.random();
  // console.log(randomNumber);
  
  // if (randomNumber > 0.5) {
  //   throw new Error("Error occurred");
  // }


  return (
    <>
      <div>
        <h1>Home Page</h1>
        <p className={styles.title}>Welcome to our website!</p>
      </div>
    </>
  );
};

export default Home;