'use client';

export default function VoteButton({ categoryId }: { categoryId: string }) {
  const handleVoteClick = () => {
    window.open(`https://www.tca2025.com/category/${categoryId}`, '_blank');
  };

  return (
    <button
      onClick={handleVoteClick}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
    >
      Vote Now
    </button>
  );
}
