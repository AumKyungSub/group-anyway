import React from 'react'
import IndexHeader from '../structureComponent/index/IndexHeader'
import MainSlideSec from '../structureComponent/index/MainSlideSec'
import RecommendSec from '../structureComponent/index/RecommendSec'
import BestSellerSec from '../structureComponent/index/BestSellerSec'
import SeasonRecommendSec from '../structureComponent/index/SeasonRecommendSec'
import FlagshipSec from '../structureComponent/index/FlagshipSec'
import WithSulwhasooSec from '../structureComponent/index/WithSulwhasooSec'

function Index() {
  return (
    <>
        <IndexHeader/>
      <main>
        <MainSlideSec />
        <RecommendSec />
        <BestSellerSec />
        <SeasonRecommendSec />
        <FlagshipSec />
        <WithSulwhasooSec />
      </main>
    </>
  )
}

export default Index
