import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function TwoColumnComponent() {
  return (
    <div className="flex h-screen">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default TwoColumnComponent;
