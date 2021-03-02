import React,{Fragment,useState} from 'react'

export default () => {
    const [isOpen, setOpen] = useState(false);
    const dropdownClass = `dropdown-menu${isOpen ? " show" : ""}`;

    const toggleOpen = () => {
        setOpen(!isOpen);
    }
   
    return (
        <Fragment> 
           
            <div className="sticky-inner">
           
            <div class="dropdown mr-4" onClick={toggleOpen}>
                <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    
                </a>

                <div class={dropdownClass} aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item" href="#">Acount Settings</a>
                    <a class="dropdown-item" href="#">User Management</a>
                    <a class="dropdown-item" href="#">My Team</a>
                    <a class="dropdown-item" href="#">English(UK)</a>
                    <a class="dropdown-item" href="#">Logout</a>
                </div>
                </div>

            </div>
        </Fragment>
    )
}