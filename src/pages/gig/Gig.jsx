import React from "react";
import "./gig.scss";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import Reviews from "../../components/reviews/reviews";

function Gig() {
  const { id } = useParams();
  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/user/${data.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="gig">
      <div className="container">
        {isLoading ? (
          "Loading.."
        ) : error ? (
          "Something went wrong"
        ) : (
          <>
            <div className="left">
              <span className="breadcrumbs">Liverr Graphics & Design </span>
              <h1>I will create ai generated art for you</h1>
              {isLoadingUser ? (
                "loading"
              ) : errorUser ? (
                "something went wrong"
              ) : (
                <div className="user">
                  <img
                    className="pp"
                    src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <span>{dataUser.username}</span>

                  {!isNaN(data.totalStars / data.startNumber) && (
                    <div className="stars">
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <span>
                        {Math.round(data.totalStars / data.startNumber)}
                      </span>
                    </div>
                  )}
                </div>
              )}
              {/* <Slider
            slidesToShow={3}
            slidesToScroll={3}
            dots={true}
            className="slider"
          >
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider> */}
              <h2>About This Gig</h2>
              <p>{data.desc}</p>
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img
                    src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                  <div className="info">
                    <span>Anna Bell</span>
                    <div className="stars">
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <img src="/img/star.png" alt="" />
                      <span>5</span>
                    </div>
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">USA</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>
                    My name is Anna, I enjoy creating AI generated art in my
                    spare time. I have a lot of experience using the AI program
                    and that means I know what to prompt the AI with to get a
                    great and incredibly detailed result.
                  </p>
                </div>
              </div>
              <Reviews gigId={id} />
            </div>
            <div className="right">
              <div className="price">
                <h3>1 AI generated image</h3>
                <h2>$ 59.99</h2>
              </div>
              <p>
                I will create a unique high quality AI generated image based on
                a description that you give me
              </p>
              <div className="details">
                <div className="item">
                  <img src="/img/clock.png" alt="" />
                  <span>2 Days Delivery</span>
                </div>
                <div className="item">
                  <img src="/img/recycle.png" alt="" />
                  <span>3 Revisions</span>
                </div>
              </div>
              <div className="features">
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Prompt writing</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Artwork delivery</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Image upscaling</span>
                </div>
                <div className="item">
                  <img src="/img/greencheck.png" alt="" />
                  <span>Additional design</span>
                </div>
              </div>
              <button>Continue</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Gig;
