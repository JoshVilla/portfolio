import GitHubCalendar from "react-github-calendar";
import { Separator } from "../ui/separator";

const Github = () => {
  return (
    <div className="w-2/3 mx-auto my-30">
      <div className="text-2xl">Github Contributions</div>
      <Separator />
      <GitHubCalendar
        username="JoshVilla"
        colorScheme="light"
        blockSize={10}
        blockMargin={5}
        fontSize={12}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default Github;
