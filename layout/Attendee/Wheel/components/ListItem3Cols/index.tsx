export default function ListItem3Cols({
  user,
  prize,
  when,
  isLast = false,
  isFullBold = false,
}) {
  if (!isLast) {
    var border = "border-b-solid border-b-2";
  }
  if (isFullBold) {
  }
  return (
    <div className={`mb-5 w-full pb-3 ${border} grid grid-cols-5 items-center`}>
      <div className="text-left">
        <p className="font-ibold">{user}</p>
      </div>
      <div className="justify-self-end">
        <img src={prize.avatar} className="w-10" />
      </div>
      <div className="col-span-2 ml-4 text-left">
        <p className="text-iregular">{prize.name}</p>
      </div>
      <div className="text-right">
        <p className="text-ibold pr-4 font-bold text-quinary">{when}</p>
      </div>
    </div>
  );
}
