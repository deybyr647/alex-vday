const Form = () => {
    return (
        <div className={"container is-flex is-justify-content-space-evenly m-2"}>
            <div className="field">
                <p className="control">
                    <button className="button is-success">
                        Yes
                    </button>
                </p>
            </div>

            <div className="field">
                <p className="control">
                    <button className="button is-danger">
                        No
                    </button>
                </p>
            </div>
        </div>
    )
}

export default Form;