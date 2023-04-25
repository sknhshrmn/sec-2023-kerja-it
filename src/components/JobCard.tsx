import Moment from "moment";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../constant/config";

function JobCard(props: any) {
  // function to detext if the year is 2023, isNew === true
  const date = new Date(props.job.post_date);
  const isNew = date.getFullYear() === 2023;

  // navigate function
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/job/${props.job.id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="p-6 bg-white flex flex-col justify-between gap-4 w-[calc((100%_-_2rem)/3)] border rounded-md  text-gray-600 hover:cursor-pointer text-sm"
    >
      <div>
        <h4 className="inline-block text-start px-2 text-lg font-medium text-black">
          {props.job.job}
        </h4>
        {/* condition rendering here, if isNow === true by using tenary operator */}
        {isNew ? (
          <span className="inline-block bg-green-300 px-1 text-xs text-gray-600">
            New
          </span>
        ) : null}
        <p className="p-2">{props.job.company}</p>
      </div>
      <div>
        <div className="px-2 flex justify-start items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar-date"
            viewBox="0 0 16 16"
          >
            <path d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg>
          <p>Posted on {Moment(props.job.post_date).format("Do MMM YYYY")}</p>
        </div>
        <div className="px-2 flex justify-start items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          <p>{props.job.company_state}</p>
        </div>
        <div className="px-2 flex justify-start items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
            />
          </svg>
          <p className="capitalize">{props.job.work_type}</p>
        </div>
      </div>
      <div className="px-2 flex justify-start items-start flex-wrap gap-3">
        {props.job.stacks.map((stack: string, index: number) => {
          return (
            <p
              key={index}
              className="bg-gray-200 text-black text-sm  rounded px-2"
            >
              {stack}
            </p>
          );
        })}
      </div>
      <p className="p-2 text-sm">
        Added on {Moment(props.job.post_date).format("Do MMM YYYY")}
      </p>
    </div>
  );
}

export default JobCard;
