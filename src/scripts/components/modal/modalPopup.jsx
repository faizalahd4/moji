import React, {useState,useEffect,useContext} from "react";

const ModalPopup = (props) => { 
    const [modal,setModal]=useState({
		title: props.title?props.title:'Modal',
		content:props.content?props.content:'<p></p>',
		btnTitle:props.btnTitle?props.btnTitle:'Open Modal',
		header:props.header?props.header:'Modal Header',
		footer:props.footer?props.footer:'',
		visibility:'none',
		btnClassName:props.btnClassName?props.btnClassName:''
	
	});

    
    useEffect(() => {
        //setModal(0);
      }, []);

    function handleClick(e){
		if(e.target.id=='cs-modal'){
			setModal({
				...modal,
				visibility:'block'
			})
		}else{
			setModal({
				...modal,
				visibility:'none'
			})
		}

	}


	console.log(modal);
    return (
		<div className="cs">
			<button className={modal.btnClassName} onClick={handleClick} id="cs-modal">{modal.btnTitle}</button>
			
			<div id="myModal" className="cs-modal" style={{display:modal.visibility}}>
			  <div className="cs-modal-container">
				<div className="cs-modal-header">
				  <span className="close" onClick={handleClick} id="close">&times;</span>
				  <h2>{modal.header}</h2>
				</div>
				<div className="cs-modal-body">
					<div dangerouslySetInnerHTML={{__html: modal.content}} />
				</div>
				<div className="cs-modal-footer">
				  {modal.footer}
				</div>
			  </div>
			</div>
		</div>
    )
}

export default ModalPopup;

