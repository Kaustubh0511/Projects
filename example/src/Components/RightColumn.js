import TopRightBox from "./TopRightBox";
import BottomRightBox from "./BottomRightBox";

function RightColumn() {
  return (
    <div className="w-1/2 flex flex-col">
      <TopRightBox />
      <BottomRightBox />
    </div>
  );
}

export default RightColumn;
