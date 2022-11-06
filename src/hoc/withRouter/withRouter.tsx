import React from "react";
import {
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";

// interface withRouter_props {
//     router: {
//         location: Location,
//         navigate: NavigateFunction,
//         params: Readonly<Params<string>>
//     };
// }

// withRouter component
const withRouter: (Component: any) => any = Component => {

    const ComponentWithRouterProp: React.FC = props => {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        // return JSX with above properties
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

// export withRouter
export default withRouter;