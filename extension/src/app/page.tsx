"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">LeetCode Problem Simulator</h1>

        {/* Simulated LeetCode problem container */}
        <div className="bg-[#252525] rounded-lg p-6">
          <div data-track-load="description_content">
            <h2 className="text-xl font-semibold mb-4">Two Sum</h2>
            <p className="text-gray-300">
              Given an array of integers nums and an integer target, return
              indices of the two numbers in the array such that they add up to
              target. You may assume that each input would have exactly one
              solution, and you may not use the same element twice. You can
              return the answer in no specific order. Example 1: Input: nums =
              [2,7,11,15], target = 9 Output: [0,1] Explanation: Because nums[0]
              + nums[1] == 9, we return [0, 1].
            </p>
          </div>
        </div>

        {/* Test Controls */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">Testing Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Load the Chrome extension</li>
            <li>
              You should see a &quot;Simplify&quot; button appear above the
              problem description
            </li>
            <li>Click the button to test the simplification functionality</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
