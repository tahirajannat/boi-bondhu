import React, { Fragment, useEffect, useState } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { UseUser } from '../contexts/AuthContext';
import Login from './Login';
import './Styles/AddComment.scss';

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : '';
  const [comment, setComment] = useState('');

  const [isLogin, setIsLogin] = useState(false);
  const { user, setUser } = UseUser();
  const { totalReview, setTotalReview } = UseUser(0);

  useEffect(() => {
    //
    user?.userID ? setIsLogin(true) : setIsLogin(false);
  }, [user?.userID]);

  const clickHandler = () => {
    if (comment === '' || comment === ' ') return;

    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: replyingToUser + comment,
      createdAt: new Date(),
      score: 0,
      username: 'juliusomo',
      currentUser: true,
      replies: [],
    };

    const myUser = {
      loggedIn: true,
      profile: {
        name: 'Tahira',
        email: 'tahira@gmail.com',
      },
    };
    setUser(myUser);

    addComments(newComment);
    setComment('');

    // setTotalReview((totalReview = newComment + 1));
  };

  return (
    <div className='grid grid-cols-1'>
      {!isLogin ? (
        <Fragment>
          <div className='text-red-400 my-6 mx-8'>
            <div className=' my-4 text-left'>
              <h2 className='text-xl'>Please Sign in to comment here</h2>
            </div>
            <div className='text-left'>
              <Login />
            </div>
          </div>
        </Fragment>
      ) : (
        <div className='grid grid-cols-4'>
          <div className='add-comment col-span-3 my-4 mx-0 '>
            <div className='profile-pic'></div>
            <textarea
              className='comment-input'
              placeholder='Add a review'
              value={replyingToUser + comment}
              onChange={(e) => {
                setComment(
                  e.target.value.replace(
                    replyingTo ? `@${replyingTo}, ` : '',
                    ''
                  )
                );
              }}
            />
            <div className='send-btn-container'>
              <div className='profile-pic'></div>

              <button className='add-btn' onClick={clickHandler}>
                {buttonValue}
              </button>
              {/* <Button className="add-btn" onClick={clickHandler}>
                {buttonValue}
              </Button> */}
            </div>
          </div>
          <div class='col-span-1 my-12 text-red-300'>
            <span className='flex items-center gap-2 text-xl text-yellow-500'>
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddComment;
