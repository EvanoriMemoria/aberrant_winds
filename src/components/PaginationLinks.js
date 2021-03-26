import React from "react"
import { Pagination, PaginationItem, PaginationLink } from "reactstrap"

const PaginationLinks = ({ currentPage, numberOfPages, homePage, pageType }) => {
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const previousPage =
    currentPage - 1 === 1 ? '/' + homePage + '/' : '/' + pageType + '/' + (currentPage - 1).toString()
  const nextPage = '/' + pageType + '/' + (currentPage + 1).toString()
  return (
    <Pagination area-label="Page navigation example">
      {isFirst ? (
        <PaginationItem disabled>
          <PaginationLink previous href={'/' + pageType + '/'}></PaginationLink>
        </PaginationItem>
      ) : (
        <PaginationItem >
          <PaginationLink previous href={previousPage} />
        </PaginationItem>
      )}
        {Array.from({ length: numberOfPages}, (_, i) => currentPage === i + 1 ? (
            <PaginationItem active key={`page-number${i+1}`}>
                <PaginationLink href={`/${i === 0 ? homePage : pageType + '/' + (i + 1)}`}>
                    {i + 1}
                </PaginationLink>
            </PaginationItem>
        ) : (
            <PaginationItem key={`page-number${i+1}`}>
                <PaginationLink href={`/${i === 0 ? homePage : pageType + '/' + (i + 1)}`}>
                    {i + 1}
                </PaginationLink>
            </PaginationItem>
        ))}
      {isLast ? (
        <PaginationItem disabled>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      ) : (
        <PaginationItem>
          <PaginationLink next href={nextPage} />
        </PaginationItem>
      )}
    </Pagination>
  )
}

export default PaginationLinks
