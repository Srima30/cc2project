import React from 'react'

export default function Singers() {
  return (
    <div>
      <table style={{width:"30%" ,marginLeft:"32rem"}} class="table  table-bordered  table-hover mt-5 pd-5">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope='row'>A.R.Rahman</td>
            <td>2003</td>
          </tr>
          <tr>
            <td scope='row'>Illaya Raja</td>
            <td>1990</td>
          </tr>
          <tr>
            <td scope='row'>Harris Jayaraj</td>
            <td>2005</td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}