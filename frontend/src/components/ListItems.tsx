import { Listings } from "./ListMarket";
import { Grid } from "@mui/material";
import { ListItem } from "./ListItem";

export interface MarketList {
    Lists: Listings[];
}

export function ListItems({Lists}: MarketList) {
    return <Grid container>
        {Lists.map(item => <ListItem description={item.description} id={item.id}/>)}
  </Grid>
}