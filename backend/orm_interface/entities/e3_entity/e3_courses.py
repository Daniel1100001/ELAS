from sqlalchemy import Column, String, Integer, ForeignKey
from orm_interface.base import Base
from sqlalchemy.orm import relationship



class E3_Courses(Base):
    __tablename__ = "e3_courses"

    id = Column(String, primary_key=True)
    link = Column(String)
    catalog = Column(String)
    sws: Column(String)
    num_expected_participants = Column(Integer)
    max_participants = Column(Integer)
    credit = Column(Integer)
    language = Column(String)
    description = Column(String)
    location = Column(String)
    exam_type = Column(String)
    time_manual = Column(String)
    ausgeschlossen_ingenieurwissenschaften_bachelor = Column(String)
    avg_ratings = relationship(Integer, ForeignKey('avg_ratings.id'))

    def __init__(self, id, link, catalog, 
                    sws, num_expected_participants, 
                    max_participants, credit,language,
                    description, location, exam_type, time_manual,
                    ausgeschlossen_ingenieurwissenschaften_bachelor, avg_ratings ):
        self.id = id
        self.link = link
        self.catalog = catalog
        self.sws = sws
        self.num_expected_participants = num_expected_participants
        self.max_participants = max_participants
        self.credit = credit
        self.language = language
        self.description = description
        self.location = location
        self.exam_type = exam_type
        self.time_manual = time_manual
        self.ausgeschlossen_ingenieurwissenschaften_bachelor = ausgeschlossen_ingenieurwissenschaften_bachelor
        self.avg_ratings = avg_ratings
