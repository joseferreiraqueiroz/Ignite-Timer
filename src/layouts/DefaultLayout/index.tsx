import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { LayoutComponent } from "./style";

export function DefaultLayout() {
    return(
        <div>
            <LayoutComponent>
                <Header/>
                <Outlet/>
            </LayoutComponent>
        </div>
    )
}