import { ArticleData } from "../data/articles-data";

const WritingPage = () => {
    return (
        <div className="">
            <div className="">There will be 2 sections to this page</div>
            <ol>
                <li>A section describing my writing with a link to my Medium</li>
                <li>A section with preview cards that link out to some of my articles</li>
            </ol>
            {/* Need to refactor this to be its own cards */}
            {ArticleData.map((article) => (
                <div className="">
                    <hr />
                    <h3 className="">{article.title}</h3>
                    <div className="">
                        <b>Author:</b> {article.author} // add person icon
                    </div>
                    <div className="">
                        <b>Date Published:</b> {article.date} // add date icon
                    </div>
                    <p>
                        {article.blurb}
                    </p>
                    <a href={article.link} target="_blank">Read More...</a>
                </div>
            ))}
        </div>
    )
};

export default WritingPage;