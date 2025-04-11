import React, { useState, useEffect } from 'react';

const Smile = () => {
  const emojiList = ['😀', '😂', '😍', '😎', '😢'];
  const [votes, setVotes] = useState({});
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const storedVotes = JSON.parse(localStorage.getItem('votes')) || {};
    setVotes(storedVotes);
  }, []);

  const handleVote = (emoji) => {
    const updatedVotes = { ...votes, [emoji]: (votes[emoji] || 0) + 1 };
    setVotes(updatedVotes);
    localStorage.setItem('votes', JSON.stringify(updatedVotes));
  };

  const showWinner = () => {
    const entries = Object.entries(votes);
    if (entries.length === 0) {
      setWinner('Вы не проголосовали');
      return;
    }
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const [emoji, count] = sorted[0];
    setWinner(`Победитель: ${emoji} с ${count} голосами!`);
  };

  const clearVotes = () => {
    localStorage.removeItem('votes');
    setVotes({});
    setWinner('');
  };

  return (
    <div className="text-center font-sans p-6 bg-white rounded-xl shadow-xl">
      <h1 className="text-[40px] font-bold mb-6">Проголосуйте за смайлик</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {emojiList.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleVote(emoji)}
            className="text-[35px] bg-gray-100 px-4 py-2 rounded hover:bg-green-300 transition"
          >
            {emoji} ({votes[emoji] || 0})
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={showWinner}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Победитель
        </button>
        <button
          onClick={clearVotes}
          className="bg-orange-500 text-white px-4 py-2 rounded"
        >
          Очистить результат
        </button>
      </div>
      {winner && <div className="mt-6 text-xl font-medium">{winner}</div>}
    </div>
  );
};

export default Smile;
