import { useState } from "react";
import parse, { Element, HTMLReactParserOptions } from "html-react-parser";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import { IColorTheme } from "../../shared/color_themes";
import axios from "axios";
import {
  StyledHeader,
  CenteredDiv,
  SpacedDiv,
  StyledCenteredHeader,
} from "./style";

interface IAnalysisProps {
  theme?: IColorTheme;
}

interface ITagData {
  [tag: string]: number;
}

const Temporary = ({ theme }: IAnalysisProps) => {
  // const [url, setUrl] = useState<string>("");
  // const [uniqueTags, setUniqueTags] = useState<ITagData>({});
  // const [mostUsedTag, setMostUsedTag] = useState<string | null>(null);
  // const [longestPath, setLongestPath] = useState<string | null>(null);
  // const fetchAndParseData = async () => {
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:3001/fetch_data?url=${url}`
  //     );
  //     const html = res.data;
  //     // Initialize local uniqueTags object
  //     const uniqueTags: ITagData = {};
  //     // Parse the HTML data
  //     const options: HTMLReactParserOptions = {
  //       replace: (domNode) => {
  //         if (domNode.type && domNode.type === "tag" && "attribs" in domNode) {
  //           const element = domNode as Element;
  //           // Increment the count of the tag in the local uniqueTags
  //           const tag = element.name || element.name;
  //           uniqueTags[tag] = (uniqueTags[tag] || 0) + 1;
  //         }
  //       },
  //     };
  //     parse(html, options);
  //     // Set the state for uniqueTags
  //     setUniqueTags(uniqueTags);
  //     // Compute the most used tag and the longest path
  //     let mostUsedTagName = null;
  //     let mostUsedTagCount = 0;
  //     let longestPathName = null;
  //     let longestPathLength = 0;
  //     for (const [tag, count] of Object.entries(uniqueTags)) {
  //       if (count > mostUsedTagCount) {
  //         mostUsedTagCount = count;
  //         mostUsedTagName = tag;
  //       }
  //       if (tag.split(">").length > longestPathLength) {
  //         longestPathLength = tag.split(">").length;
  //         longestPathName = tag;
  //       }
  //     }
  //     setMostUsedTag(mostUsedTagName);
  //     setLongestPath(longestPathName);
  //   } catch (e) {
  //     if (axios.isAxiosError(e)) {
  //       console.error(e.toJSON());
  //     } else {
  //       console.error(e);
  //     }
  //   }
  // };
  // return (
  //   <>
  //     <StyledCenteredHeader>Webpage Analysis</StyledCenteredHeader>
  //     <CenteredDiv>
  //       <SpacedDiv>
  //         <Label theme={theme} targetinput="url" weight="600">
  //           Webpage URL
  //         </Label>
  //       </SpacedDiv>
  //       <SpacedDiv>
  //         <Input
  //           type="text"
  //           identifier="url"
  //           value={url}
  //           changeEvent={(e) => setUrl(e.target.value)}
  //           theme={theme}
  //         />
  //       </SpacedDiv>
  //       <SpacedDiv>
  //         <button onClick={fetchAndParseData}>Analyze</button>
  //       </SpacedDiv>
  //     </CenteredDiv>
  //     <CenteredDiv>
  //       <StyledHeader>Unique tags: </StyledHeader>{" "}
  //       <span>{Object.keys(uniqueTags).join(", ")}</span>
  //     </CenteredDiv>
  //     <CenteredDiv>
  //       <StyledHeader>Most used tag: </StyledHeader> {mostUsedTag}
  //     </CenteredDiv>
  //     <CenteredDiv>
  //       <StyledHeader>Longest path: </StyledHeader> {longestPath}
  //     </CenteredDiv>
  //   </>
  // );
};

export default Temporary;
