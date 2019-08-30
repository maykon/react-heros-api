import React, { useState, useEffect } from "react";
import "./styles.css";
import Pagination from "@atlaskit/pagination";

import HeroApi from "../../services/HeroApi";
import HeroItem from "../HeroItem";
import SearchInput from "../SearchInput";
import FilterGender from "../FilterGender";

export default function HeroList() {
  const [heros, setHeros] = useState([]);
  const [filterHeros, setFilterHeros] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(0);
  const pageMax = 10;

  useEffect(() => {
    const loadHeros = async () => {
      const response = await HeroApi.get("/all.json");
      const heros = response.data;
      setHeros(heros);
      setPagination(heroPagination(heros));
    };

    loadHeros();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPagination(heroPagination(heroList()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterHeros, filterGender]);

  const heroPagination = list => {
    const numPages = list.length / pageMax;
    return Array.from({ length: numPages }, (v, k) => k + 1);
  };

  const handlePaginate = (e, page) => {
    setPage(page - 1);
  };

  const clearPageFilter = () => {
    setPage(0);
  };

  const clearFilters = () => {
    clearPageFilter();
    setFilterHeros("");
    setFilterGender("");
  };

  const handleFilterHeros = hero => {
    clearPageFilter();
    setFilterHeros(hero);
  };

  const handleFilterGender = gender => {
    clearPageFilter();
    setFilterGender(gender);
  };

  const heroInPage = indexPage =>
    indexPage >= page * pageMax && indexPage < (page + indexPage) * pageMax;

  const heroList = () =>
    heros
      .filter(hero => RegExp(filterHeros, "i").test(hero.name))
      .filter(hero =>
        !filterGender ? true : hero.appearance.gender === filterGender
      )
      .filter((hero, i) => heroInPage(i));

  return (
    <div className="heroList">
      <SearchInput search={filterHeros} onChange={handleFilterHeros} />
      <FilterGender gender={filterGender} onChange={handleFilterGender} />
      <button type="button" onClick={clearFilters} />
      {pagination.length && (
        <div className="pagination">
          <Pagination
            pages={pagination}
            max={pageMax}
            onChange={handlePaginate}
            selectedIndex={page}
          />
        </div>
      )}

      <div>
        {heroList().map(hero => (
          <HeroItem key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
}
