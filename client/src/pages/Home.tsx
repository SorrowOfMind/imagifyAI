import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import useFetch from "../hooks/useFetch";

const Home = () => {

  return (
    <section className="container">
      <section>
        <h3 className="text-4xl">Create stunning and ingenious images</h3>
        <h4>with a little help from DALL-E</h4>
        <Link to="/create">CREATE</Link>
      </section>
      <section>
        <div>
          <h1 className="text-4xl">Display Showcase</h1>
          <p className="my-2 text-base max-w-[500px]">Explore the world of images generated by DALL-E AI</p>
        </div>

        <div className="mt-16">
          {/* <FormInput /> */}
        </div>

        <div className="mt-10">
          {/* {loading ? 
            (<p>Loading</p>) :
            (<>
              {searchText && (<h3>Results for {searchText}</h3>)}
              <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              </div>
            </>)
          } */}
        </div>
      </section>
    </section>
  );
}

export default Home