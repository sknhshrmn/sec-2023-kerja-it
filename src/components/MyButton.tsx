function MyButton(props: any) {
  return (
    <button className="py-2 px-3  border:hover rounded-md bg-white">
      {props.text}
    </button>
  );
}

export default MyButton;
