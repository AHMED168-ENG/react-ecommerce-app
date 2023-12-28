import { Link } from "react-router-dom";
import "../../scss/blog_details/blog_details.scss"
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoPinterest } from "react-icons/io";

function BlogDetails() {

    return ( 
        <>
            <div className="blog-details">
                <div className="blog-details-wrapper">
                    <header className="mb-4">
                        <h2 className="text-capitalize">A butefull sunday morning renaissance</h2>
                    </header>
                    <div className="images">
                        <div className="image">
                            <img src="/images/blog-1.jpg" alt="" />
                        </div>
                    </div>
                    <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae,     explicabo a aliquam excepturi Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab facere quas id architecto illo, minus corrupti quos quasi   vitae, explicabo a aliquam excepturi </p>
                    <div className="date d-flex gap-3 align-items-center">
                        <span>11 june 2022</span>
                        <span>kajat korat</span>
                    </div>
                    <div className="social my-5 d-flex align-items-center justify-content-between">
                        <Link to="/blogs"><IoIosArrowRoundBack></IoIosArrowRoundBack> <span className="text-capitalize">back to blogs</span></Link>
                        <div className="icons">
                            <a href="/"><FaFacebookSquare></FaFacebookSquare></a>
                            <a href="/"><FaTwitter></FaTwitter></a>
                            <a href="/"><IoLogoPinterest></IoLogoPinterest></a>
                        </div>
                    </div>
                    <div className="comment">
                        <h4>leave a comment</h4>
                        <form action="">
                            <div className="input">
                                <input className="form-control" type="text" name="" id="" placeholder="name" />
                            </div>
                            <div className="input">
                                <input className="form-control" type="email" name="" id="" placeholder="email" />
                            </div>
                            <div className="input">
                                <textarea className="form-control" name=""></textarea>
                            </div>
                            <button className="mt-3 text-capitalize">post comment</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
} 

export default BlogDetails ;