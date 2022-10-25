import Image from 'next/image'
import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'
import {IoSwapVertical} from 'react-icons/io5'
import astar from '../assets/astar.png'
import Shiden from '../assets/Shiden.png'
import { useState } from 'react'

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#191B1F] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl`,
  transferPropContainer: `bg-[#20242A] my-3 rounded-2xl p-6 text-3xl  border border-[#20242A] hover:border-[#41444F]  flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#B2B9D2] outline-none mb-6 w-full text-2xl`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#2D2F36] hover:bg-[#41444F] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem]`,
  currencySelectorIcon: `flex items-center`,
  swapIcon: `flex items-center justify-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]`,
}
const Main = () => {
	const [showList, setShowList] = useState(false);
	console.log(showList);
	return (
	  <div className={style.wrapper}>
		<div className={style.content}>
		  <div className={style.formHeader}>
			<div>Swap</div>
			<div>
			  <RiSettings3Fill />
			</div>
		  </div>
		  <div className={style.transferPropContainer}>
			<input
			  type='text'
			  className={style.transferPropInput}
			  placeholder='0.0'
			  pattern='^[0-9]*[.,]?[0-9]*$'
			  onChange={e => handleChange(e, 'amount')}
			/>
			<div className={style.currencySelector}>
			  <button className={style.currencySelectorContent} onClick={ () => setShowList
					((prevState) => !prevState )}>
				<div className={style.currencySelectorIcon}>
				  <Image src={Shiden} alt='shiden' height={20} width={20} />
				</div>
				<div className={style.currencySelectorTicker}>SDN</div>
				{showList ? (
				<AiOutlineUp className={style.currencySelectorArrow} />
				) : (
				<AiOutlineDown className={style.currencySelectorArrow} />
				)}
			  </button>
			  {/**
			  {showList && (
					<ul className={style.currencySelectorContent}>
					{[
						{token:'aUSD', tokenName:'aUSD'},
						{token:'USDT', tokenName:'USDT'},
						].map(({token,tokenName},index) => (
							<li
								key={index}
								className={`${style.currencySelectorTicker} `}
							>
							{tokenName}
							</li>
						))}
					</ul>
				)} 
				*/}
			</div>
		  </div>
			<div className={style.swapIcon}>		  
			<IoSwapVertical  
				size={42}
			/>
		  </div>

		  <div className={style.transferPropContainer}>
			<input
			  type='text'
			  className={style.transferPropInput}
			  placeholder='0.0'
			  pattern='^[0-9]*[.,]?[0-9]*$'
			  onChange={e => handleChange(e, 'amount')}
			/>
			<div className={style.currencySelector}>
			  <div className={style.currencySelectorContent}>
				<div className={style.currencySelectorIcon}>
				  <Image src={astar} alt='astar logo' height={20} width={20} />
				</div>
				<div className={style.currencySelectorTicker}>SBY</div>
				<AiOutlineDown className={style.currencySelectorArrow} />
			  </div>
			</div>
		  </div>
		  <div onClick={e => handleSubmit(e)} className={style.confirmButton}>
			Confirm
		  </div>
		</div>

	  </div>
	)
  }
export default Main 