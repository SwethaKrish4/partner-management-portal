import cancelIcon from '../../svg/cancel_icon.svg';

function SuccessMessage({ successMsg, clickOnCancel}) {
    return (
        <>
            <div>
                <p className=" text-sm font-semibold text-white break-words font-inter">
                    {successMsg}
                </p>
            </div>
            <div className="mr-3 ml-5">
                <img src={cancelIcon} alt="" onClick={clickOnCancel}></img>
            </div>
        </>
    );
}

export default SuccessMessage;