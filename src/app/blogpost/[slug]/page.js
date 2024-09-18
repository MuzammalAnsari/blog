export default function page({ params }) {
    const data = {
        title: "Understanding React Components",
        author: "Jane Doe",
        date: "September 18, 2024",
        description: "React components are the building blocks of any React application.",
        htmlContent: `
          <p>React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.</p>
          <h2>What is a Component?</h2>
          <p>A component is a JavaScript function or class that optionally accepts inputs i.e. properties (props) and returns a React element that describes how a section of the UI should appear.</p>
        `
      };
      
  return (
    <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">&quot;{data.description}&quot;</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-4 italic">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-4">{data.date}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose dark:prose-invert"></div>
            <OnThisPage htmlContent={htmlContent}/>
        </div>
  );
}
