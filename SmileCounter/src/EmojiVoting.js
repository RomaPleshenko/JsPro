import React from 'react';

class EmojiVoting extends React.Component {
  constructor(props) {
    super(props);
    const storedVotes = JSON.parse(localStorage.getItem('votes')) || {};
    this.state = {
      emojis: ['😀', '😂', '😍', '😎', '😢'],
      votes: storedVotes,
      winner: ''
    };
  }

  handleVote = (emoji) => {
    const votes = { ...this.state.votes };
    votes[emoji] = (votes[emoji] || 0) + 1;
    this.setState({ votes }, () => {
      localStorage.setItem('votes', JSON.stringify(this.state.votes));
    });
  };

  showResults = () => {
    const entries = Object.entries(this.state.votes);
    if (entries.length === 0) {
      this.setState({ winner: 'Вы еще не проголосовали' });
      return;
    }
    const sorted = entries.sort((a, b) => b[1] - a[1]);
    const [emoji, count] = sorted[0];
    this.setState({ winner: `Победитель: ${emoji} с ${count} голосами!` });
  };

  clearResults = () => {
    localStorage.removeItem('votes');
    this.setState({ votes: {}, winner: '' });
  };

  render() {
    const { emojis, votes, winner } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Голосование за смайлики</h1>
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          {emojis.map((emoji) => (
            <div
              key={emoji}
              style={{ fontSize: '40px', cursor: 'pointer' }}
              onClick={() => this.handleVote(emoji)}
            >
              {emoji} ({votes[emoji] || 0})
            </div>
          ))}
        </div>
        <button onClick={this.showResults} style={{ marginRight: '10px' }}>
          Show Results
        </button>
        <button onClick={this.clearResults}>Очистить результат</button>
        {winner && <div style={{ marginTop: '20px', fontSize: '20px' }}>{winner}</div>}
      </div>
    );
  }
}

export default EmojiVoting;