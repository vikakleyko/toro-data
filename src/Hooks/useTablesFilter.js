import { useState } from "react";

export function useTablesFilter() {
  const [tablesFilter, setTablesFilter] = useState();

  const checkTablesFilter = (index) => {
    setTablesFilter(
      tablesFilter.map((item, i) => {
        const newItem = { ...item };
        if (i === index) {
          newItem.checked = !newItem.checked;
        }
        return newItem;
      })
    );
  };

  return { tablesFilter, setTablesFilter, checkTablesFilter };
}
