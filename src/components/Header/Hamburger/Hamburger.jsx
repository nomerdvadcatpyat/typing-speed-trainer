import './Hamburger.scss';


export const Hamburger = ({isCollapsed, onClick}) => {
	return isCollapsed || isCollapsed === null ? (
		<div className="hamburger collapsed-hamburger" onClick={onClick}>
			<div className="collapsed-hamburger__line_first collapsed-hamburger__line"> </div>
			<div className="collapsed-hamburger__line_second collapsed-hamburger__line"> </div>
			<div className="collapsed-hamburger__line_third collapsed-hamburger__line"> </div>
		</div>
	) :
	(
		<div className="hamburger opened-hamburger" onClick={onClick}>
			<div className="opened-hamburger__line_first opened-hamburger__line"> </div>
			<div className="opened-hamburger__line_second opened-hamburger__line"> </div>
		</div>
	)
}