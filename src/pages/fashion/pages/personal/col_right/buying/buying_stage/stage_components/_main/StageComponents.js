import StageBought from "../stage_bought/StageBought";
import StageBuying from "../stage_buying/StageBuying";
import StageDelivery from "../stage_delivery/StageDelivery";
import StageReady from "../stage_ready/StageReady";

//
export const StageComponents = [
    {
        component: StageBuying,
    },
    {
        component: StageReady,
    },
    {
        component: StageDelivery,
    },
    {
        component: StageBought,
    },
] 