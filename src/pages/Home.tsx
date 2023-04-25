import MyButton from "../components/MyButton";
import MyBlackButton from "../components/MyBlackButton";
import JobCard from "../components/JobCard";
import JobData from "../assets/job-directory-data.json";
import Header from "../components/Header";
import Subheader from "../components/Subheader";

function Home() {
  // import .json data
  // use the data to repliate job card
  // every react function must return a TSX
  console.log(JobData);

  return (
    <div>
      {/* Header */}
      <Header />
      {/* subheader */}
      <Subheader />
      {/* hero */}
      <div className="h-auto py-6 flex justify-center items-center flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold">Find Tech Jobs In Malaysia 🇲🇾</h1>
        <p>Let employers find you. Or apply to companies directly.</p>
        <div className="flex justify-center  items-center  ">
          <MyBlackButton text="🎯 I want companies to find me" />
          <MyButton text="🔍 Search Jobs" />
        </div>
      </div>
      {/* Cards Container */}
      {/* title */}
      <div className="py-6 mx-auto my-0 flex flex-col  items-start flex-wrap gap-4  max-w-screen-lg justify-center">
        <p className="text-xl font-medium">⏳ Latest Jobs →</p>
        <div className="flex justify-between flex-wrap gap-4 ">
          {/* job cards */}
          {JobData.map((data, index) => (
            <JobCard key={index} job={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
