import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import withRouter from "./withRouter";

function ScrollToTop(props) {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant'
		});
	}, [pathname]);
	return props.children
}
export default ScrollToTop = withRouter(ScrollToTop)