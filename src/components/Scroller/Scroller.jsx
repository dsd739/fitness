import React from "react";
import "./scroller.css";
import Feed from "../Feed/Feed";

export default function Scroller() {
  const video = [
    {
      URL: "https://fitify-video-post.s3.ap-south-1.amazonaws.com/My+Natural+Body+Transformation+-+Fitness+-+Bodybuilding+%23shorts_2.mp4",
      title: "My Natural Body Transformation | Fitness | Bodybuilding",
      creatorName: "BurnLab",
      likes: 100, // Add the number of likes here
      comments_count: 25, // Add the number of comments here
    },
    {
      URL: "https://fitify-video-post.s3.ap-south-1.amazonaws.com/Gym+World+Status+-+Fitness+Motivation+-+Tiktok+-+Trending+-+Gym+Status+%23short+%23shorts+%23ytshorts.mp4",
      title: "Challenge Accepted 💪 #junedfitness #ashortaday",
      creatorName: "it's Cali",
      likes: 75, // Add the number of likes here
      comments_count: 15, // Add the number of comments here
    },
    {
      URL: "https://fitify-video-post.s3.ap-south-1.amazonaws.com/Wait+For+it+%F0%9F%A7%98%E2%80%8D%E2%99%82%EF%B8%8F+%23junedfitness+%23ashortaday+%23shorts.mp4",
      title: "Wait For it 🧘‍♂ #junedfitness #ashortaday",
      creatorName: "Dhanush Amin",
      likes: 120, // Add the number of likes here
      comments_count: 30, // Add the number of comments here
    },
    {
      URL: "https://fitify-video-post.s3.ap-south-1.amazonaws.com/Challenge+For+You+%E2%80%BC%EF%B8%8F+%23junedfitness+%23ashortaday+%23shorts.mp4",
      title: "Challenge For You ‼ #junedfitness #ashortaday",
      creatorName: "Juned Fitness",
      likes: 90, // Add the number of likes here
      comments_count: 20, // Add the number of comments here
    },
    {
      URL: "https://fitify-video-post.s3.ap-south-1.amazonaws.com/Breathing+Technique+for+6+Pack+Abs+%23fitness+%23shorts.mp4",
      title: "Breathing Technique for 6 Pack Abs #fitness #shorts",
      creatorName: "Gahlot Harsh",
      likes: 150, // Add the number of likes here
      comments_count: 35, // Add the number of comments here
    },
  ];

  return (
    <>
      <ul className="contents">
        {video.map((data) => {
          return (
            <li>
              <Feed
                key={data.URL}
                url={data.URL}
                caption={data.title}
                likes={data.likes}
                comments={data.comments_count}
                username={data.creatorName}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
