import { useState } from 'react';
// import '../../assets/styles/AddComment.scss';

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
    const replyingToUser = replyingTo ? `@${replyingTo}, ` : '';
    const [comment, setComment] = useState('');

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

        addComments(newComment);
        setComment('');
    };

    return (
        <div className='grid grid-cols-3'>
            <div className='add-comment col-span-2 my-4 mx-0 '>
                <div className='profile-pic'></div>
                <textarea
                    className='comment-input'
                    placeholder='Add a comment'
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
                </div>
            </div>
        </div>
    );
};

export default AddComment;
