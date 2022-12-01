import { FC } from "react";
import { IWarehouse } from "../../../models/IWarehouse";
import ListItem from "./ListItem";

const List: FC<any> = (params: any) => {
  return (
    <ul className="flex flex-col gap-5">
      {params.map((items: IWarehouse) => {
        return (
          <ListItem
            key={items.id}
            id={items.id}
            title={items.title}
            owner={items.owner}
            url={`/warehouses/${items.id}/${items.id}`}
            region={items.region}
            address={items.address}
            contacts={items?.contacts}
            brief={items.brief}
            payment_options={items.payment_options}
          />
        );
      })}
    </ul>
  );
};

export default List;
