import request from 'supertest';
import { app, server } from '../server';

describe('GET /api/info', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('should return the correct JSON response', async () => {
    const res = await request(app).get('/api/info');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      classMembers: ["Alice", "Bob", "Charlie"],
      totalStudents: 3,
      resources: [
        { name: "Hosting", url: "RenderURL", icon: "IconURL" },
        { name: "Testing framework", url: "JestURL", icon: "IconURL" },
        { name: "HTTP tests", url: "SupertestURL", icon: "IconURL" }
      ]
    });
  });
});
