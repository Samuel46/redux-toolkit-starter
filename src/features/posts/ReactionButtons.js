const reactionEmoji = {
	thumbsUp: "👍",
	wow: "😮",
	heart: "❤️",
	rocket: "🚀",
	coffee: "☕",
};

const ReactionButtons = ({ post }) => {
	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				type="button"
				className="reactionButton"
				onClick={() => {
					const newValue = post.reactions[name] + 1;
					//  Dispatch an action to update the post's reactions
				}}
			>
				{emoji} {post.reactions[name]}
			</button>
		);
	});

	return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
