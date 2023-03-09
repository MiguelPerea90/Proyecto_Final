import React from "react";
import styles from "./Paged.module.css";

export default function Paginado(props) {
  let pageLength = [];

  for (
    let i = 1;
    i <= Math.ceil(props.allItems?.length / props.itemsInPage);
    i++
  ) {
    pageLength.push(i);
  }

  return (
    <div className={styles.pagedContainer}>
      <ul className={styles.pagedContainerList}>
        <li className={styles.pagedList}>
          <a
            onClick={(e) => {
              props.currentPage > 1
                ? props.paginado(props.currentPage - 1)
                : props.paginado(props.currentPage);
            }}
          >
            ←
          </a>
        </li>
        {pageLength.length > 0 ? (
          pageLength.map((p) => (
            <li className={styles.pagedList} key={p}>
              <a onClick={() => props.paginado(p)}>{p}</a>
            </li>
          ))
        ) : (
          <p>...</p>
        )}
        <li className={styles.pagedList}>
          <a
            onClick={() => {
              props.currentPage < pageLength.length
                ? props.paginado(props.currentPage + 1)
                : props.paginado(props.currentPage);
            }}
          >
            →
          </a>
        </li>
      </ul>
    </div>
  );
}
