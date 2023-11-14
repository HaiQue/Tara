import React, { useEffect, useState } from "react";
import axios from "axios";
import { StyledTable, LoadingIndicator, ErrorBox } from "../../pages/styles";
import { IColorTheme } from "../../shared/color_themes";
import { StyledChartName, StyledCurrencyUpdatedTime } from "./style";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface ICurrenciesProps {
  theme?: IColorTheme;
}

interface IBPIData {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

interface IApiData {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    USD: IBPIData;
    GBP: IBPIData;
    EUR: IBPIData;
  };
}

enum SortDirection {
  Ascending = "ASC",
  Descending = "DESC",
}

interface SortConfig {
  key: keyof IBPIData | null;
  direction: SortDirection;
}

const AnalysisOrg = ({ theme }: ICurrenciesProps) => {
  const [data, setData] = useState<IApiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: null,
    direction: SortDirection.Ascending,
  });

  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await axios.get(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      setData(result.data);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedData = React.useMemo(() => {
    const sortableData = [data?.bpi.USD, data?.bpi.GBP, data?.bpi.EUR].filter(
      Boolean
    ) as IBPIData[];
    if (sortConfig !== null) {
      sortableData.sort((a: IBPIData, b: IBPIData) => {
        if (a[sortConfig.key!] < b[sortConfig.key!]) {
          return sortConfig.direction === "ASC" ? -1 : 1;
        }
        if (a[sortConfig.key!] > b[sortConfig.key!]) {
          return sortConfig.direction === "ASC" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [data, sortConfig]);

  const requestSort = (key: keyof IBPIData) => {
    let direction = SortDirection.Ascending;
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === SortDirection.Ascending
    ) {
      direction = SortDirection.Descending;
    }
    setSortConfig({ key, direction });
  };

  return (
    <>
      {loading ? (
        <LoadingIndicator></LoadingIndicator>
      ) : error ? (
        <ErrorBox>{error}</ErrorBox>
      ) : (
        <>
          <>
            {/* <StyledCurrencyUpdatedTime>
              Currency updated time: {data?.time.updated}
            </StyledCurrencyUpdatedTime> */}
            <StyledChartName>
              <p>Your current money</p>
            </StyledChartName>
          </>
          
        </>
        // -------------------
      )}
    </>
  );
};

export default AnalysisOrg;
