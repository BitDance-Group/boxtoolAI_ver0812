import MediaBase from "./MediaBase";
import {
  GooglePodcastsLogo,
  Image as I,
  VideoCamera,
} from "@phosphor-icons/react/dist/ssr";
import { useDispatch, useSelector } from "react-redux";
import { onClickAudio } from "../../redux/clickAudioSlice";
import { onClickImage } from "../../redux/clickImageSlice";
import { onClickVideo } from "../../redux/clickVideoSlice";

export const Audio = () => {
  const dispatch = useDispatch();
  const acceptType = ["mp3", "raw", "wav"];
  return (
    <MediaBase
      IconComp={GooglePodcastsLogo}
      placeholder="Upload your Audio"
      accept={acceptType}
      callback={({ source, filetype }) => {
        dispatch(onClickAudio());
        return (
          <audio controls className="w-full">
            <source src={source} type={filetype} />
          </audio>
        );
      }}
    />
  );
};

export const Image = () => {
  const dispatch = useDispatch();
  const acceptType = ["jpg", "png", "jpeg"];
  return (
    <MediaBase
      IconComp={I}
      placeholder="Upload your Image"
      accept={acceptType}
      callback={({ source, filetype }) => {
        dispatch(onClickImage());
        return (
          <img src={source} type={filetype} className="pointer-events-none" />
        );
      }}
    />
  );
};

export const Video = () => {
  const acceptType = ["mp4", "wav", "mov", "webm"];
  const dispatch = useDispatch();
  return (
    <MediaBase
      IconComp={VideoCamera}
      placeholder="Upload your video"
      accept={acceptType}
      callback={({ source, filetype }) => {
        dispatch(onClickVideo());
        return (
          <video width="400" height="400" controls autoPlay>
            <source src={source} type={filetype} />
          </video>
        );
      }}
    />
  );
};
