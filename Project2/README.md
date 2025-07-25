Build a small app where users can submit feedback: Like, Dislike, or Neutral. Show a summary of total feedback counts and calculate overall sentiment.

🔧 What You’ll Practice:
Concept ✅
useState (for multiple values) ✅
Passing functions as props ✅
Conditional rendering ✅
Component structuring ✅

🧱 Components:

1. FeedbackButtons (child)
   Props: onLike, onDislike, onNeutral

Renders three buttons

2. FeedbackStats (child)
   Props: like, dislike, neutral

Renders:

Count of each type

Total feedbacks

Sentiment: Positive / Negative / Mixed

3. FeedbackApp (parent)
   Maintains all feedback counts in state

Passes functions and values to child components
