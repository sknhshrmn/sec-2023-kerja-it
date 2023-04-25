function MyBlackButton(props: any) {
  return (
    <button className="p-3 border:hover rounded-md bg-gray-800 text-white">
      {props.text}
    </button>
  );
}

export default MyBlackButton;
