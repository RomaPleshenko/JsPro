import React from "react";

const EMOJIS = ["😀", "😂", "😍", "😢", "😢"];

class EmojiVoting extends React.Component {
  constructor(props) {
    super(props);
    const savedVotes = JSON.parse(localStorage.getItem("emojiVotes")) || {};
    this.state = {
      votes: savedVotes,
      showResults: false,
    };
  }

  handleVote = (emoji) => {
    this.setState(
      (prevState) => {
        const newVotes = { ...prevState.votes, [emoji]: (prevState.votes[emoji] || 0) + 1 };
        localStorage.setItem("emojiVotes", JSON.stringify(newVotes));
        return { votes: newVotes };
      }
    );
  };

  handleShowResults = () => {
    this.setState({ showResults: true });
  };

  handleClearResults = () => {
    localStorage.removeItem("emojiVotes");
    this.setState({ votes: {}, showResults: false });
  };

  getWinnerEmoji = () => {
    const { votes } = this.state;
    if (Object.keys(votes).length === 0) return "Нет голосов";
    return Object.entries(votes).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  };

  render() {
    const { votes, showResults } = this.state;

    return (
      <div className="text-center font-sans p-6 bg-emerald-400 rounded-xl shadow-2xl">
        <h1 className="text-[40px] font-bold mb-6">Голосование за смайлик</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {EMOJIS.map((emoji) => (
           <button
           key={emoji}
           onClick={() => this.handleVote(emoji)}
           className="text-[30px] bg-gray-100 px-4 py-2 rounded hover:bg-emerald-600 transition w-28 h-16 flex items-center justify-center"
         >
           {emoji} <span className="ml-2 text-[20px]">({votes[emoji] || 0})</span>
         </button>
          ))}
        </div>
        <div className="space-x-4">
          <button onClick={this.handleShowResults} className="w-50 bg-red-600 text-white px-4 py-2 rounded">Показать результат</button>
          <button onClick={this.handleClearResults} className="w-50 bg-red-700 text-white px-4 py-2 rounded">Очистить</button>
        </div>
        {showResults && (
          <div className="mt-4 text-xl">Победитель: {this.getWinnerEmoji()}</div>
        )}
      </div>
    );
  }
}

export default EmojiVoting;
