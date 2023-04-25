function MyBlackButtonGrayText(props: any) {
  return (
    <button className="py-2 px-3 hover:bg-gray-900 rounded-md bg-black text-gray-500 border border-gray-500">
      {props.text}
    </button>
  );
}

export default MyBlackButtonGrayText;
