import React, { useEffect, useState } from 'react';



function RecommendationCard(props) {


  return (
    <div>
      <h1>rec card</h1>
      <h4>{props.recommendation.category}</h4>
      <p>{props.recommendation.content}</p>
    </div>
  )
}

export default RecommendationCard