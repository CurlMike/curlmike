import WikiText from "./WikiText";

function WikiContainer({ selected }) {

    return (
        <div className="WikiBg py-14">
            <div className="WikiContainer mx-auto border border-blue-500 rounded-md p-12 bg-gray-900 opacity-95">
                <WikiText selected={selected} />
            </div>
        </div>
    );
}


export default WikiContainer;