function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CourseList courses={filteredCourses} />
      <Footer />
    </>
  );
}