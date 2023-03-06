
import { useState } from 'react'
import Hero from '../../fragments/Hero'
import CoursesCat from '../../fragments/CoursesCat'
import LessonBox from '../../components/LessonBox'
import Posts from '../../fragments/Posts'

export default function Home({categories}) {

  return (<>
	<Hero />
	<CoursesCat categories={categories} />
	<Posts
		link={`/${categories[0].slug}/${categories[0].courses[1].slug}`}
		title={`${categories[0].courses[1].title} Popular Lessons`}
		svg={categories[0].courses[1].svg}
	>
		{categories[0].courses[1].lessons.map((lesson, key) => <LessonBox
			key={key}
			data={lesson}
			link={`/${categories[0].slug}/${categories[0].courses[1].slug}/${lesson.slug}`}
		/>)}
	</Posts>
	<Posts
		link={`/${categories[0].courses[3].slug}`}
		title={`${categories[0].courses[3].title} Popular Lessons`}
		svg={categories[0].courses[3].svg}
	>
		{categories[0].courses[3].lessons.map((lesson, key) => <LessonBox
			key={key}
			data={lesson}
			link={`/${categories[0].slug}/${categories[0].courses[3].slug}/${lesson.slug}`}
		/>)}
	</Posts>
	<Posts
		link={`/${categories[1].courses[1].slug}`}
		title={`${categories[1].courses[1].title} Popular Lessons`}
		svg={categories[1].courses[1].svg}
	>
		{categories[1].courses[1].lessons.map((lesson, key) => <LessonBox
			key={key}
			data={lesson}
			link={`/${categories[1].slug}/${categories[1].courses[1].slug}/${lesson.slug}`}
		/>)}
	</Posts>

	{/* TODO: Add the fun facts section */}
  </>)
}
