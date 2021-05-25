import { AboutCommonRoutes } from "../routes/routes";

//
export const common_about_title = AboutCommonRoutes.map(item => ({
    search: item.search,
    title: item.title,
}))
